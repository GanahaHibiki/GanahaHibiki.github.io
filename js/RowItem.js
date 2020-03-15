class RowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgs = [];
    this.props.cardUris.forEach((uri, index) => {
      imgs.push(
        (<img key={+new Date() + "_" + this.props.rowIndex + "_" + index} src={uri}></img>)
      )
    });


    return (
      <tr id="scoreRow">
        <td style={{ align: 'center' }}>{this.props.rowIndex}</td>
        <td>
          {imgs}
        </td>
      </tr>
    );
  }
}