import dynamic from 'next/dynamic'
import Frame from '../components/frame';

const ProviderAdd = dynamic(() => import('../components/provider/add'), {
  ssr: false
})

const Provider = () => {
  return (
    <Frame>
      <ProviderAdd />
    </Frame>
  );
}
export default Provider;