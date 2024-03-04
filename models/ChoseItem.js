class ChoseItem {
  constructor(
    topclothes,
    botclothes,
    shoes,
    handbags,
    necklaces,
    hairstyle,
    background
  ) {
    this.topclothes = topclothes;
    this.botclothes = botclothes;
    this.shoes = shoes;
    this.handbags = handbags;
    this.necklaces = necklaces;
    this.hairstyle = hairstyle;
    this.background = background;
    this.pickItem = (item) => {
      switch (item.type) {
        case "topclothes":
          this.topclothes = item.imgSrc_png;
          document.getElementsByClassName(
            "bikinitop"
          )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
          document.getElementsByClassName("bikinitop")[0].style.backgroundSize =
            "cover";
          break;
        case "botclothes":
          this.botclothes = item.imgSrc_png;
          document.getElementsByClassName(
            "bikinibottom"
          )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
          document.getElementsByClassName(
            "bikinibottom"
          )[0].style.backgroundSize = "cover";
          break;
        case "shoes":
          this.botclothes = item.imgSrc_png;
          document.getElementsByClassName(
            "feet"
          )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
          document.getElementsByClassName("feet")[0].style.backgroundSize =
            "cover";
          break;
        case "handbags":
          this.botclothes = item.imgSrc_png;
          document.getElementsByClassName(
            "handbag"
          )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
          document.getElementsByClassName("handbag")[0].style.backgroundSize =
            "cover";
          break;
        case "necklaces":
          this.botclothes = item.imgSrc_png;
          document.getElementsByClassName(
            "necklace"
          )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
          document.getElementsByClassName("necklace")[0].style.backgroundSize =
            "cover";
          break;
        case "hairstyle":
          this.botclothes = item.imgSrc_png;
          document.getElementsByClassName(
            "hairstyle"
          )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
          document.getElementsByClassName("hairstyle")[0].style.backgroundSize =
            "cover";
          break;
        case "background":
          this.botclothes = item.imgSrc_png;
          document.getElementsByClassName(
            "background"
          )[0].style.backgroundImage = `url(${item.imgSrc_png})`;
          document.getElementsByClassName(
            "background"
          )[0].style.backgroundSize = "cover";
          break;
        default:
          break;
      }
    };
  }
}
