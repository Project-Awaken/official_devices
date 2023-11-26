const BOT_API = process.env.BOT_API;
const CHANNEL_ID = process.env.CHANNEL_ID;
const API_URL = `https://api.telegram.org/bot${BOT_API}/sendPhoto`;
const BANNER_URL =
  "https://raw.githubusercontent.com/Project-Awaken/official_devices/ursa/banner/awaken_banner_v4.0.png";

/* Exit if `BOT_API` or `CHANNEL_ID` is empty */
if (!BOT_API && !CHANNEL_ID) {
  console.error("BOT_API and/or CHANNEL_ID is empty!");
  process.exit(1);
}

/* Check whether to continue CI */
const cp = require("node:child_process");
const skipCI = cp.execSync("git log -1 --pretty=%B", { encoding: "utf-8" });

if (skipCI.includes("skip-ci")) {
  console.log("Skipping CI ...");
  return;
}

/* Get a list of devices updated */
const changed_files = cp.execSync(
  'git diff --name-only HEAD~1 -- "devices/*.json" | cut -d/ -f2',
  { encoding: "utf-8" }
);

if (!changed_files) {
  console.log("No devices file change detected!");
  return;
}

const fs = require("node:fs");
const path = require("node:path");
const devices_updated = changed_files.split("\n").filter(Boolean);
// const branch_name = process.env.GITHUB_REF_NAME;

console.log("Changed device files: ", devices_updated);
for (const device of devices_updated) {
  (async () => {
    console.log(`Creating post for ${device}\n`);

    const file_path = path.join(process.cwd(), "devices", device);
    let file_json;
    try {
      const file_buf = fs.readFileSync(file_path);
      file_json = JSON.parse(file_buf);
    } catch (error) {
      console.log(`Error reading file: ${file_path}\n`);
      console.error(error);
      console.log("\nExiting ...");
      process.exit(1);
    }

    if (!file_json) return;

    const date = new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
    }).format(new Date(file_json.response[0].datetime * 1000));
    const maintainers = file_json.maintainer.map(
      (m) =>
        `<b><a href='https://t.me/${m.socials?.telegram}'>${m.name}</a></b>`
    );
    const version = file_json.response[0].version;
    const android_version = file_json.android_version;
    const device_name = file_json.device_display_name;
    const codename = file_json.device_display_codename;

    const post_template = `
#awakenOS #rom #ursa
<b>awakenOS v${version} ursa - Android ${android_version}</b>

<b>• Build Date:</b> ${date}
<b>• Device:</b> ${device_name} (<i>${codename}</i>)
<b>• Maintainer:</b> ${maintainers.join(" | ")}

If you like the project, then you can support us by donating

<b>PayPal:</b> https://paypal.me/Beastmaster007
<b>UPI:</b> <code>bjsaikiran1@ybl</code>
`;

    const res_body = {
      photo: BANNER_URL,
      chat_id: CHANNEL_ID,
      caption: post_template,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    };

    const btn_row_1 = [
      { text: "AwakenOS Chat", url: "https://t.me/AwakenOSChat" },
    ];

    const btn_row_2 = [
      {
        text: "Download",
        url: `https://awakenos.vercel.app/downloads/${file_json.device_display_codename}`,
      },
    ];

    if (file_json.device_telegram_group) {
      btn_row_1.push({
        text: "Device Support",
        url: `https://t.me/${file_json.device_telegram_group}`,
      });
    }

    if (file_json.device_xda_thread) {
      btn_row_2.push({
        text: "XDA",
        url: file_json.device_xda_thread,
      });
    }

    res_body.reply_markup = {
      inline_keyboard: [btn_row_1, btn_row_2],
    };

    const res = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(res_body),
      headers: { "Content-Type": "application/json;charset=UTF-8" },
    });

    if (!res.ok) {
      console.log("Error while posting to Telegram!\n");
      console.log(res_body);
      console.log(await res.json());
      process.exit(1);
    }
  })();
}
