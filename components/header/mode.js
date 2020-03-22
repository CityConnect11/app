import Slider from 'rc-slider';

const ModeSelection = () => {
  return (
    <div>
      <Slider min={"privat"} defaultValue={"privat"} 
        marks={{ private: "privat", business: "geschäftlich" }} 
        step={null} />
    </div>
  )
}

export default ModeSelection