// src/assets/images.ts

// --- DMSBG Devices ---
import DMSBGBannerDesktop from "$/images/products/dmsbg/banner.png";
import DMSBGBannerMobile from "$/images/products/dmsbg/banner_sm.png";

import DMSBG300Desktop from "$/images/products/dmsbg/img_1.png";
import DMSBG300Mobile from "$/images/products/dmsbg/img_1_sm.png";

import DMSBG100Desktop from "$/images/products/dmsbg/img_2.png";
import DMSBG100Mobile from "$/images/products/dmsbg/img_2_sm.png";

import DMSBG50Desktop from "$/images/products/dmsbg/img_3.png";
import DMSBG50Mobile from "$/images/products/dmsbg/img_3_sm.png";

import DMSBGDevicesImg from "$/images/products/product_7.png";
import DPBXDevicesImg from "$/images/products/product_5.png";
import SoftphoneImg from "$/images/products/product_6.png";

// --- DPBX Devices ---
import DPBXBannerDesktop from "$/images/products/dpbx/banner.png";
import DPBXBannerMobile from "$/images/products/dpbx/banner_sm.png";

import DPBX50Desktop from "$/images/products/dpbx/img_1.png";
import DPBX50Mobile from "$/images/products/dpbx/img_1_sm.png";

// --- Softphone ---
import SoftphoneBannerDesktop from "$/images/products/softphone/banner.png";
import SoftphoneBannerMobile from "$/images/products/softphone/banner_sm.png";

import SoftphoneMainDesktop from "$/images/products/softphone/softphone.png";
import SoftphoneMainMobile from "$/images/products/softphone/softphone_sm.png";

import MasonryImage from "$/images/products/softphone/img_1.png";
import GooglePlay from "$/images/products/softphone/google_play.png";
import QRCode from "$/images/products/softphone/qr_code.png";

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
