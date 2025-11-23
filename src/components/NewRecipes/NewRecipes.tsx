import React, { useEffect, useRef, useState } from "react";
import { recipes } from "../../utils/data";
import { PageTitle } from "../PageTitle/PageTitle";
import { RecipeCard } from "../RecipeCard/RecipeCard";
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
      <PageTitle title="Nuevas Recetas" />
      <div
        className="new-recipes__grid"
        ref={scrollRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};
