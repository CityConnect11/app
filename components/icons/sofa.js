const SofaIcon = () => (
  <i
    dangerouslySetInnerHTML={{
      __html: require("../../public/static/sofa.svg?include"),
    }}
  />
);

/*const SofaImage = () => (
  <image src={logo} alt="logo"/>
);*/

export default SofaIcon;