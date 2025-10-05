"use client";

import { Icon } from "@iconify/react";
import facebookIcon from "@iconify-icons/ri/facebook-fill";
import twitterIcon from "@iconify-icons/ri/twitter-x-fill";
import linkedinIcon from "@iconify-icons/ri/linkedin-fill";

type Props = {
  url: string;
  title: string;
};

export default function ShareButtons({ url, title }: Props) {
  const handleShare = (platform: string) => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);

    let shareLink = "";

    switch (platform) {
      case "facebook":
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "twitter":
        shareLink = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
        break;
      case "linkedin":
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
        break;
    }

    if (shareLink) {
      window.open(shareLink, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="flex items-center gap-3">
      <button onClick={() => handleShare("facebook")}>
        <Icon icon={facebookIcon} width={28} height={28} />
      </button>
      <button onClick={() => handleShare("twitter")}>
        <Icon icon={twitterIcon} width={28} height={28} />
      </button>
      <button onClick={() => handleShare("linkedin")}>
        <Icon icon={linkedinIcon} width={28} height={28} />
      </button>
    </div>
  );
}
