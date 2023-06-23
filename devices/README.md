# AwakenOS Official Devices API

## Purpose

This folder contains information of official Devices in `<codename>.json` format. This will be helpful for things
like Automatic Updates Poster and our [website](https://awakenos.net/). New maintainers are required to create a pull request to this repository to add their
devices.

## Format

```json
{
  "maintainer": [
    {
      "name": "Maintainer1",
      "socials": {
        "telegram": "Maintainer1",
        "github": "Maintainer1",
        "xda": "Maintainer1"
      }
    },
    {
      "name": "Maintainer2",
      "socials": {
        "telegram": "Maintainer2",
        "github": "Maintainer2",
        "xda": "Maintainer2"
      }
    }
  ],
  "active": true,
  "android_version": 13,
  "available_versions": [12, 13],
  "release": "monthly",
  "device_display_name": "Redmi Note 8 PUBG Edition",
  "device_display_codename": "ginkgo/willow",
  "device_telegram_group": "AwakenOSChat",
  "device_xda_thread": "",
  "public_download": "https://www.download.com",
  "response": [
    {
      "datetime": 1688821462,
      "size": 2091226061,
      "filehash": "05e95a982122ebf1a3d5dadc2309c772",
      "filename": "awaken-3.8-triton_void-beryllium-official-1305-20230708.zip",
      "id": "5539bc803e24b07a3187fe9d2b36f5aac226e7037e35951f08c2f2a42777b752",
      "romtype": "official",
      "version": "3.8",
      "url": "https://sourceforge.net/projects/project-awaken/files/beryllium/awaken-3.8-triton_void-beryllium-official-1305-20230708.zip/download"
    }
  ]
}
```

## Variables

### Maintainer Information

> **Warning**
>
> Fields marked as required should not be empty!

| Fields     | Notes                                               | Required   |
| ---------- | --------------------------------------------------- | ---------- |
| `name`     | What the maintainer would like be to be referred as | `true`     |
| `telegram` | Telegram username of the maintainer                 | `true`     |
| `github`   | Github username of the maintainer                   | `true`     |
| `xda`      | XDA username of the maintainer                      | `optional` |

### Device Information

| Fields                    | Notes                                                                                    | Required   |
| ------------------------- | ---------------------------------------------------------------------------------------- | ---------- |
| `active`                  | If the maintainer is currently maintaining this device (can be either `true` or `false`) | `true`     |
| `android_version`         | Android version e.g, `13`, `14` etc                                                      | `true`     |
| `available_versions`      | Array of all versions of android builds available for the device                         | `true`     |
| `device_display_codename` | codename of the device, if there are multiple codename, split it with a `/`              | `true`     |
| `device_display_name`     | Name of the Device given by the Brand                                                    | `true`     |
| `device_telegram_group`   | Device support telegram chat id                                                          | `optional` |
| `device_xda_thread`       | XDA Thread maintained by the device maintainer for his builds.                           | `optional` |
| `public_download`         | Download link to show on website                                                         | `true`     |
| `release`                 | Release type ie. `monthly`, `weekly`, `daily`, etc.                                      | `optional` |

### OTA Information

> **Note**
>
> All fields are required!

| Fields     | Notes                                                                |
| ---------- | -------------------------------------------------------------------- |
| `datetime` | build date expressed as UNIX timestamp                               |
| `filename` | the name of the file to be downloaded                                |
| `id`       | a string that uniquely identifies the update                         |
| `romtype`  | the string to be compared with the `ro.awaken.buildtype` property    |
| `size`     | the size of the update expressed in bytes                            |
| `url`      | the URL of the file to be downloaded                                 |
| `version`  | the string to be compared with the `ro.awaken.base.version` property |
