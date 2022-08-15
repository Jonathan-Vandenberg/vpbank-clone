import CardSlider from "../UI/CardSlider";

const data = [
  {
    image: "https://picsum.photos/id/10/300/300",
    id: "6",
    title: "Bank with us!",
    content:
      "We are a bank that provides you with the best services in the world. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia rem quos enim fuga id fugit vel rerum porro maxime deserunt sed molestiae quisquam veritatis et, quibusdam culpa officiis ad est.",
  },
  {
    image: "https://picsum.photos/id/38/300/300",
    id: "7",
    title: "Youth Starter Plans",
    content:
      "Banks that provides youth with the best services in the world. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia rem quos enim fuga id fugit vel rerum porro maxime deserunt sed molestiae quisquam veritatis et, quibusdam culpa officiis ad est.",
  },
  {
    image: "https://picsum.photos/id/93/300/300",
    id: "8",
    title: "Here for you!",
    content:
      "Your Future Goals Achieved Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia rem quos enim fuga id fugit vel rerum porro maxime deserunt sed molestiae quisquam veritatis et, quibusdam culpa officiis ad est.",
  },
];

const TipsStories = () => {
  return (
    <CardSlider data={data} width={300} height={300} scaleOnHover={true} />
  );
};

export default TipsStories;
