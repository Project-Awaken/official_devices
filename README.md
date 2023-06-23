# Official Devices

This is our repo where all stuff related to official devices is stored.

You also need to use this to apply for official maintainership for your device.

## Folder Structure

Follow below folder structure before adding/modifying any data.

| Directory       | Notes                                                                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------- |
| `/changelogs`   | Device changelog goes here. See [`/changelogs/README.md`](./changelogs/README.md) for more details.   |
| `/devices`      | Device information goes here. See [`/devices/README.md`](./devices/README.md) for more details.       |
| `/instructions` | Flashing instructions for device.                                                                     |
| `/images`       | Device images go here, in **PNG** format. Filename must be the device codename e.g., `beryllium.png`. |

## `devices.json` Structure

This file should contain every device supported by **Awaken OS** in the given format:

```json
{
  "devices": [
    {
      "codename": "beryllium",
      "codename_alt": "beryllium",
      "vendor": "Xiaomi",
      "model": "Xiaomi Pocophone F1",
      "maintainer_name": "Ninad Patil",
      "active": true
    },
    {
      "codename": "cepheus",
      "vendor": "Xiaomi",
      "model": "Xiaomi Mi 9",
      "maintainer_name": "Sven",
      "active": true
    }
  ]
}
```

> **Warning**
>
> Fields marked as required should not be empty!

| Fields            | Notes                                               | Required   |
| ----------------- | --------------------------------------------------- | ---------- |
| `codename`        | Primary codename of the device                      | `true`     |
| `codename_alt`    | Alternate codename of the device if any             | `optional` |
| `vendor`          | Device manufacturer name                            | `true`     |
| `model`           | Device name                                         | `true`     |
| `maintainer_name` | Maintainer name                                     | `true`     |
| `active`          | Whether this device is in active development or not | `true`     |

## `team.json` Structure

This file should contain every team member working on **Awaken OS** in the given format:

```json
{
  "team": [
    {
      "name": "Saikiran",
      "role": "Founder & Lead Developer",
      "socials": {
        "github": "saikiran2001",
        "telegram": "Saikiran008",
        "xda": "saikiran001.8222620"
      }
    },
    {
      "name": "Ninad Patil",
      "role": "Lead Developer",
      "socials": {
        "github": "PainKiller3",
        "telegram": "Reignz3",
        "xda": "reignz3.6549853"
      }
    }
  ]
}
```

> **Warning**
>
> Fields marked as required should not be empty!

| Fields     | Notes                     | Required   |
| ---------- | ------------------------- | ---------- |
| `name`     | Member name               | `true`     |
| `role`     | Role of the member        | `true`     |
| `github`   | Member's github username  | `true`     |
| `telegram` | Member's telegram profile | `optional` |
| `xda`      | Member's XDA profile      | `optional` |

1. [Device stability requirements](requirements.md)
2. [Maintainer requirements](maintainerreq.md)
3. [Maintainership form](https://github.com/Project-Awaken/official_devices/issues/new/choose)
