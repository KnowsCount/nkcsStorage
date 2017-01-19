import React, {Component, PropTypes} from 'react';
import { Input, Icon} from 'antd';
import {editableCell, inputWrapper, textWrapper, checkIcon, editIcon} from './index.css';

class EditableCell extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            editable: false
        };
        this.check = this.check.bind(this);
        this.edit = this.edit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        let value = e.target.value;
        this.setState({value});
    }

    check(){
        this.setState({
            editable:false
        });
        if(this.props.onChange){
            this.props.onChange(this.state.value);
        }
    }

    edit(){
        this.setState({
            editable: true
        });
    }

    render(){
        let {value, editable} = this.state;
        return (
            <div className={editableCell}>
                {
                    editable?
                    (
                        <div className={inputWrapper}>
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className={checkIcon}
                                onClick={this.check}
                            />
                        </div>
                    ):
                    (
                        <div className={textWrapper}>
                            {value || ''}
                            <Icon
                                type="edit"
                                className={editIcon}
                                onClick={this.edit}
                            />
                        </div>
                    )

                }
            </div>
        );
    }
}

EditableCell.propTypes = {
    value: PropTypes.any,
    onChange: PropTypes.func,
};

export default EditableCell;