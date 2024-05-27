import { DirectionType, SkeletonType } from "../interfaces";
import Skeleton from "../ui/Sceleton/Sceleton";



interface Props {
  isLoading: boolean;
  direction?: DirectionType;
  type?: SkeletonType;
}

function  withSkeleton<P extends object>(Component: React.ComponentType<P> ,  count: number,  direction: DirectionType, type: SkeletonType)  {
  return function WithSkeleton(props: Props & P) {
    const { isLoading, ...restProps } = props;
    if (isLoading) {
      return <Skeleton type={type} count={count} direction={direction} />;
    }
    return <Component {...restProps as P} />;
  };
}

export default withSkeleton;
