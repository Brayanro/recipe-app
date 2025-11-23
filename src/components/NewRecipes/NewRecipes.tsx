import React, { useEffect, useRef, useState } from "react";
import icDifficulty from "../../assets/dificultad.svg";
import icHeart from "../../assets/ic_heart.svg";
import icStar from "../../assets/ic_star.svg";
import icPortion from "../../assets/tamaño.svg";
import icTime from "../../assets/tiempo.svg";
import { recipes } from "../../utils/data";
import "./NewRecipes.scss";

export const NewRecipes = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const resetTimeoutRef = useRef<number | undefined>(undefined);
  const isResettingRef = useRef(false);

  useEffect(() => {
    let animationFrameId: number;

    const autoScroll = () => {
      if (scrollRef.current && !isDown && !isResettingRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const maxScroll = scrollWidth - clientWidth;

        if (maxScroll > 0) {
          if (scrollLeft >= maxScroll - 5) {
            isResettingRef.current = true;

            if (resetTimeoutRef.current) {
              clearTimeout(resetTimeoutRef.current);
            }

            resetTimeoutRef.current = window.setTimeout(() => {
              if (scrollRef.current) {
                scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });

                setTimeout(() => {
                  isResettingRef.current = false;
                }, 600);
              }
            }, 1500);
          } else {
            scrollRef.current.scrollLeft += 2;
          }
        }
      }

      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (resetTimeoutRef.current) {
        clearTimeout(resetTimeoutRef.current);
      }
    };
  }, [isDown]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => setIsDown(false);

  const onMouseUp = () => setIsDown(false);

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="new-recipes">
      <h2 className="new-recipes__title">Nuevas Recetas</h2>
      <div
        className="new-recipes__grid"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {recipes.map((recipe) => (
          <div key={recipe.id} className="new-recipes__card">
            <div className="new-recipes__card-image">
              <img
                src={recipe.image}
                alt={`${recipe.titleMain} ${recipe.titleSub}`}
              />
            </div>
            <div className="new-recipes__card-default">
              <div className="new-recipes__card-content">
                <span className="new-recipes__card-title-main">
                  {recipe.titleMain}
                </span>
                <span className="new-recipes__card-title-sub">
                  {recipe.titleSub}
                </span>
              </div>
              <div className="new-recipes__card-footer">
                <div className="new-recipes__card-rating">
                  <img src={icStar} alt="Star" />
                  <span>{recipe.rating}</span>
                </div>
                <div className="new-recipes__card-favorite">
                  <img src={icHeart} alt="Favorite" />
                </div>
              </div>
            </div>
            <div className="new-recipes__card-hover">
              <div className="new-recipes__card-hover-item">
                <img src={icPortion} alt="Portion" className="icon-portion" />
                <span className="label">Tamaño de la porción</span>
                <span className="value">{recipe.portion}</span>
              </div>
              <div className="new-recipes__card-hover-item">
                <img src={icTime} alt="Time" className="icon-time" />
                <span className="label">Tiempo de preparación</span>
                <span className="value">{recipe.time}</span>
              </div>
              <div className="new-recipes__card-hover-item">
                <img
                  src={icDifficulty}
                  alt="Difficulty"
                  className="icon-difficulty"
                />
                <span className="label">Dificultad</span>
                <span className="value">{recipe.difficulty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
