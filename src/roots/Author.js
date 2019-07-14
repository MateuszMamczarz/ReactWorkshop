import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Author extends PureComponent {
    static propTypes = {
        authorName: PropTypes.string,
    };

    static defaultProps = {
        authorName: 'Mateusz Mamczarz',
    }

    render() {
        let { authorName } = this.props;
        return (
            <div>
                <span>Author: {authorName}</span>
            </div>
        )
    }
}

export default Author;