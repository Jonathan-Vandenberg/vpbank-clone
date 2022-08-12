const NavbarAdvertise = ({ removeNavAd }: { removeNavAd: () => void }) => {
  return (
    <div
      className="fixed -top-[48px] hidden h-12 w-full bg-advertisingNavColor px-4 py-1 sm:px-6 lg:flex"
      onClick={removeNavAd}
    >
      <div className="container relative mx-auto flex items-center justify-center">
        <p className="mx-auto font-medium">
          VPBank launches a financial brand dedicated to the breakthrough
          generation: VPBank Prime
        </p>
        <div className="ml-30">
          <button onClick={() => removeNavAd()}>X</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarAdvertise;
