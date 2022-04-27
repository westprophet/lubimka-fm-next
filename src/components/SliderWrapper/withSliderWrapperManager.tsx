import SliderWrapperManager from './contexts/SliderWrapperManager';

const withSliderWrapperManager =
  (Component: any) =>
  // eslint-disable-next-line react/display-name
  ({ ...props }) => {
    return (
      <SliderWrapperManager>
        <Component {...props} />
      </SliderWrapperManager>
    );
  };

export default withSliderWrapperManager;
