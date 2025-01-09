module.exports = {
  //---> Main code
  code: `$start
  $title[Help Has Arrived!] $description[Hi, I'm $bn, your all-in-one server assistant!\n## Argument Types\n- **<argument>** means the argument is **required**.\n- **[argument\\]** means the argument is **optional**.\n Need help with something specific? Select a category below to get a list of related commands!] $thumbnail[$userAvatar[$botID]] $image[$userBanner[$botID]] $footer[Made with ❤️ by $userDisplayName[$botOwnerID] with ForgeScript;$userAvatar[$botOwnerID]]
  $addActionRow
  $addStringSelectMenu[helpSM-$authorID]
  $addOption[Home;Return To The Help Menu Home;HOME;;true]
  $addOption[Roleplay;Get All Commands Related To Roleplay;RP]
  $addOption[Fun;Get All Commands That Are Fun;FUN]
  $addOption[Utility;Get All Utility Commands;UTIL]
  $addOption[Developer;These Commands Are Restricted To A Select Few Individuals;DEV]
  $addOption[Economy;Gets All Economy Commands;ECONOMY;;false]
  $addButton[https://kikosan.zack911.xyz/;Website;Link]
    `,
  /* Slash command data */
  data: {
    name: "help",
    description: "get all the commands!",
  },
};
