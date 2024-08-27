import { Fade } from "react-awesome-reveal";

const MainLayout = ({ children, animationDisabled }) => {
  return animationDisabled ? (
    <div className="py-5 md:px-10 px-5 container mx-auto background-biege">
      {children}
    </div>
  ) : (
    <Fade duration={700} triggerOnce>
      <div className="py-5 md:px-10 px-5 container mx-auto background-biege">
        {children}
      </div>
    </Fade>
  );
};

export default MainLayout;
