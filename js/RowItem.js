class RowItem extends React.Component {
  // return (
  //   <div className="shopping-list">
  //     <h1>Shopping List for {this.props.name}</h1>
  //     <ul>
  //       <li>Instagram</li>
  //       <li>WhatsApp</li>
  //       <li>Oculus</li>
  //     </ul>
  //   </div>
  // );
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr id="scoreRow">
          <td style="align=center">this.props.rowIndex</td>
          <td>
            {
              this.props.cardUris.map((uri, index) => {
                return
                  (<img key={+new Date() + "_" + this.props.rowIndex + "_" + index} src={uri}></img>)
              })
            }
          </td>
      </tr>
    );
  }
}