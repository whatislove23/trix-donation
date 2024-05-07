import ProgressBar from '@ramonak/react-progress-bar';

export default function Progress({ complelted, ...props }) {
  return (
    <ProgressBar
      completed={complelted}
      bgColor='#ffb300'
      isLabelVisible={false}
      animateOnRender={true}
      height='12px'
      {...props}
    />
  );
}
