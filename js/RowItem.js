class RowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgs = [];
    this.props.cardUris.forEach((uri, index) => {
      let fileName = uri.split("/")[2].split(".")[0];
      imgs.push(
        (
          <span className="IconBox">
            <img key={+new Date() + "_" + this.props.rowIndex + "_" + index} style={{height: '8rem'}} src={uri}></img>
            <em style={{"font-style": "normal"}}>{fileName}</em>
          </span>
        )
      )
    });


    return (
      <tr>
        <td style={{ "align": 'center' }}>{+this.props.rowIndex + 1}</td>
        <td className="RowBox">
          {imgs}
        </td>
      </tr>
    );
  }
}