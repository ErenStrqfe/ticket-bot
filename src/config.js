import Discord from "discord.js";
const { ButtonStyle, TextInputStyle } = Discord;

export default {
  PREFIX: "cs!",
  TOKEN: "MTE1OTk1OTAzODc4NDcyMDg5Ng.GTGCFA.M3WQZnuIDcH0ZxwExoOUG445LzEFOnmgUSGs3E",
  ACTIVITY: { NAME: "", TYPE: "PLAYING" },
  GUILD_ID: "1159812033043247155",
  TICKET: {
    CHANNEL: "1162688662232899584",
    CATEGORY: "1162411886516641823",
    ARCHIVE_CATEGORY: "1162411886516641823",
    MESSAGE: "Destek Talebi Oluşturmak İçin Tıklayın!",
    STAFF_ROLES: [1160521157615824907],
    BUTTONS: [
      {
        STYLE: ButtonStyle.Success,
        LABEL: "Onayla",
        EMOTE: "✅",
        ID: "successTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Secondary,
        LABEL: "Arşivle",
        EMOTE: "🎫",
        ID: "archiveTicket",
        DISABLED: false,
      },
      {
        STYLE: ButtonStyle.Danger,
        LABEL: "Sil",
        EMOTE: "🎟️",
        ID: "deleteTicket",
        DISABLED: false,
      },
    ],
    QUESTIONS: [
      {
        ID: "Sunucu ",
        LABEL: "Desteği Hangi Oyun Modunda Açmak İstiyorsunuz (Discord İçin "Discord" Yazın?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 5,
        MAX_LENGTH: 99999999,
        PLACE_HOLDER: "",
        REQUIRED: true,
      },
      {
        ID: "Destek Başlığı",
        LABEL: "Destek Başlığı Yazın?",
        STYLE: TextInputStyle.Short,
        MIN_LENGTH: 5,
        MAX_LENGTH: 99999999,
        PLACE_HOLDER: "",
        REQUIRED: true,
      },
    ],
  },
};
