import sofa from '../../public/static/sofa.svg';

const SofaIcon = () => (
  <i style={{backgroundSize: "20px 30px"}}
    dangerouslySetInnerHTML={{
      __html: sofa,
    }}
  />
);

export default SofaIcon;