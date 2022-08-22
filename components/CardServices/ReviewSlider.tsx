import ReviewCard from "../UI/ReviewCard";

const reviews = [
  {
    name: "Jenny Apple",
    review:
      "VPBank is the best bank in the world. I've been a customer for over 10 years and I've never regretted it. I've never regretted it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur assumenda beatae soluta suscipit, sequi rem voluptate dolor quidem velit. Necessitatibus, mollitia! Earum ipsam quos eligendi quibusdam rerum repudiandae dolore!",
    image: "https://picsum.photos/200/300?random1",
  },
  {
    name: "Patrick Stevens",
    review:
      "VPBank has saved me loads of time. I've been a customer since i turned 18. There's no better bank than VPBank. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur assumenda beatae soluta suscipit, sequi rem voluptate dolor quidem velit. Necessitatibus, mollitia! Earum ipsam quos eligendi quibusdam rerum repudiandae dolore!",
    image: "https://picsum.photos/200/300?people",
  },
  {
    name: "Herald Gustaffson",
    review:
      "Ever since I've been a customer of VPBank, I've never regretted it. I've never regretted it. Not even once. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus pariatur assumenda beatae soluta suscipit, sequi rem voluptate dolor quidem velit. Necessitatibus, mollitia! Earum ipsam quos eligendi quibusdam rerum repudiandae dolore!",
    image: "https://picsum.photos/200/300?random",
  },
];

const IconSlider = () => {
  return (
    <div className="flex flex-col items-center justify-between space-y-5 md:mx-auto md:flex-row md:space-x-5 md:space-y-0">
      {reviews.map((el, i) => (
        <div key={i} className="">
          <ReviewCard customer={el} />
        </div>
      ))}
    </div>
  );
};

export default IconSlider;
