import dynamic from 'next/dynamic'
import Frame from '../components/frame';

const ConsumerMap = dynamic(() => import('../components/consumer/map'), {
  ssr: false
})

const Consumer = () => {
  return (
    <Frame>
      <ConsumerMap />
    </Frame>
  );
}
export default Consumer;