var React = require('react');

var UserProfiles = React.createClass({
    propTypes: {
        username: React.PropTypes.string.isRequired,
        bio: React.PropTypes.object.isRequired
    },
    defaultProps: function(){
        return {
            username: '',
            bio: []
        }
    },
    render: function() {
        return (
            <div>
                Username: {this.props.username}
                Bio: {this.props.bio}
            </div>
        )
    }
});

module.exports = UserProfiles;