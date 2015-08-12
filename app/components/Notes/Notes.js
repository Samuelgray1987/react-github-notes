var React = require('react');

var Notes = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        notes: React.PropTypes.array.isRequired,
    },
    defaultProps: function(){
        return {
            username: '',
            notes: []
        }
    },
    render: function() {
        return (
            <div>
                {this.props.username}'s Notes <br />
                {this.props.notes}
            </div>
        )
    }
});

module.exports = Notes;