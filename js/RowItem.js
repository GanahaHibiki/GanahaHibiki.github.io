class RowItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let imgs = [];
    this.props.cardUris.forEach((uri, index) => {
      imgs.push(
        (<img key={+new Date() + "_" + this.props.rowIndex + "_" + index} style={{height: '8rem'}} src={uri}></img>)
      )
    });


    return (
      <tr id="scoreRow">
        <td style={{ align: 'center' }}>{+this.props.rowIndex + 1}</td>
        <td>
          {imgs}
        </td>
      </tr>
    );
  }
}