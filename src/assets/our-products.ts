// src/assets/images.ts

// --- DMSBG Devices ---
import DMSBGBannerDesktop from "$/images/products/dmsbg/banner.webp";
import DMSBGBannerMobile from "$/images/products/dmsbg/banner_sm.webp";

import DMSBG300Desktop from "$/images/products/dmsbg/img_1.webp";
import DMSBG300Mobile from "$/images/products/dmsbg/img_1_sm.webp";

import DMSBG100Desktop from "$/images/products/dmsbg/img_2.webp";
import DMSBG100Mobile from "$/images/products/dmsbg/img_2_sm.webp";

import DMSBG50Desktop from "$/images/products/dmsbg/img_3.webp";
import DMSBG50Mobile from "$/images/products/dmsbg/img_3_sm.webp";

import DMSBGDevicesImg from "$/images/products/product_7.webp";
import DPBXDevicesImg from "$/images/products/product_5.webp";
import SoftphoneImg from "$/images/products/product_6.webp";

// --- DPBX Devices ---
import DPBXBannerDesktop from "$/images/products/dpbx/banner.webp";
import DPBXBannerMobile from "$/images/products/dpbx/banner_sm.webp";

import DPBX50Desktop from "$/images/products/dpbx/img_1.webp";
import DPBX50Mobile from "$/images/products/dpbx/img_1_sm.webp";

// --- Softphone ---
import SoftphoneBannerDesktop from "$/images/products/softphone/banner.webp";
import SoftphoneBannerMobile from "$/images/products/softphone/banner_sm.webp";

import SoftphoneMainDesktop from "$/images/products/softphone/softphone.webp";
import SoftphoneMainMobile from "$/images/products/softphone/softphone_sm.webp";

import MasonryImage from "$/images/products/softphone/img_1.webp";
import GooglePlay from "$/images/products/softphone/google_play.webp";
import QRCode from "$/images/products/softphone/qr_code.webp";

export const Images = {
  DMSBG: {
    Banner: { Desktop: DMSBGBannerDesktop, Mobile: DMSBGBannerMobile },
    Devices: {
      DMSBG300: { Desktop: DMSBG300Desktop, Mobile: DMSBG300Mobile },
      DMSBG100: { Desktop: DMSBG100Desktop, Mobile: DMSBG100Mobile },
      DMSBG50: { Desktop: DMSBG50Desktop, Mobile: DMSBG50Mobile },
    },
  },

  DPBX: {
    Banner: { Desktop: DPBXBannerDesktop, Mobile: DPBXBannerMobile },
    Devices: { DPBX50: { Desktop: DPBX50Desktop, Mobile: DPBX50Mobile } },
  },

  Softphone: {
    Banner: { Desktop: SoftphoneBannerDesktop, Mobile: SoftphoneBannerMobile },
    Main: { Desktop: SoftphoneMainDesktop, Mobile: SoftphoneMainMobile },
    Extras: { MasonryImage, GooglePlay, QRCode },
  },

  ExtraImages: { DMSBGDevicesImg, DPBXDevicesImg, SoftphoneImg },
};
