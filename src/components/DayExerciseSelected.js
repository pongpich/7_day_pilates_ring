import React from 'react'
import styled from 'styled-components';


//style={{ backgroundColor: "#FFF8FB", display: "flex", flexWrap: "nowrap", justifyContent: "space-evently", gap: 20, overflowX: "scroll" }}
function DayExerciseSelected() {
  return (
    <div style={{ width: 300}}>
      <div style={{ backgroundColor: "#FFF8FB", display: "flex", flexWrap: "nowrap", justifyContent: "space-evently", gap: 70, overflowX: "scroll" }}>
        <div>DAY 1</div>
        <div>DAY 2</div>
        <div>DAY 3</div>
        <div>DAY 4</div>
        <div>DAY 5</div>
        <div>DAY 6</div>
        <div>DAY 7</div>
      </div>
    </div>
  )
}

export default DayExerciseSelected