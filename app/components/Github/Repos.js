var React = require('react');

var RepoDetails = React.createClass({
   render: function(){
       return(
           <tr>
               <td key={this.props.ind}>{this.props.data}</td>
           </tr>
       )
   }
});

var Repos = React.createClass({
    defaultProps: function(){
        return {
            repos: []
        }
    },
    propTypes: {
        repos: React.PropTypes.array.isRequired
    },
    render: function(){
        var rows = this.props.repos.map(function(repo, i){
            return(
              <RepoDetails data={repo} key={i} />
            );
        });
        return (
            <table className="table">
                {rows}
            </table>
        )
    }
});

module.exports = Repos;