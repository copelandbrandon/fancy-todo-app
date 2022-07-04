import { useState, useEffect } from "react";
import { loadBackgrounds } from "../../features/background/backgroundsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectBackgrounds } from "../../features/background/backgroundsSlice";
import { useStore } from "react-redux";
import "./Background.css";

export const Background = () => {
  const store = useStore();
  console.log(store.getState());
  const dispatch = useAppDispatch();
  const backgrounds = useAppSelector(selectBackgrounds);
  const [currentBackground, setCurrentBackground] = useState({
    urls: { full: undefined },
    id: undefined,
  });

  useEffect(() => {
    dispatch(loadBackgrounds());
  }, []);

  useEffect(() => {
    setCurrentBackground(backgrounds[0]);
  }, [backgrounds]);

  const findCurrentBackgroundIndex = () => {
    return backgrounds.indexOf(currentBackground);
  };

  const handleClickNextImage = () => {
    const currentIndex = findCurrentBackgroundIndex();
    if (currentIndex === backgrounds.length) {
      setCurrentBackground(backgrounds[0]);
    } else {
      setCurrentBackground(backgrounds[currentIndex + 1]);
    }
  };

  const handleClickPrevImage = () => {
    const currentIndex = findCurrentBackgroundIndex();
    if (currentIndex === 0) {
      setCurrentBackground(backgrounds[backgrounds.length - 1]);
    } else {
      setCurrentBackground(backgrounds[currentIndex - 1]);
    }
  };

  return (
    <div>
      <button className="prev-img-btn" onClick={handleClickPrevImage}>
        <i className="arrow left"></i>
      </button>
      <img
        src={currentBackground?.urls?.full}
        className="background-image"
        alt="background"
      />
      <button className="next-img-btn" onClick={handleClickNextImage}>
        <i className="arrow right"></i>
      </button>
    </div>
  );
};
