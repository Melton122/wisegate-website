import { useInView } from 'react-intersection-observer';

export const useScrollAnimation = (threshold = 0.1) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  return { ref, inView };
};

export const useCountUp = (end, duration = 2000) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return { ref, inView, end, duration };
};