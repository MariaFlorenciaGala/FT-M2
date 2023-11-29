import React from "react";

export class Botones extends React.Component {
  render() {
    const { alerts } = this.props; // Extracting 'alerts' prop

    return (
      <div>
        <button onClick={() => alert(alerts.m1)}>Modulo 1</button>
        <button onClick={() => alert(alerts.m2)}>Modulo 2</button>
      </div>
    );
  }
}
