class RandomButton extends React.Component {
    remove = () => {
        this.props.callbackFromParent();
    }

    randomise = () => {
        this.props.randomiseParent();
    }
    render() {
        let undoButton;
        if (this.props.selected) {
            undoButton = (
                <>
                    <div className="undo" onClick={this.remove}>
                        Undo
                    </div>
                    <style jsx>{`
                        .undo{
                            width: 20%;
                            padding: 20px;
                            background-color: #2b3346;
                            border-radius: 30px 0px 0px 30px;
                            border: solid 1px #848589;
                        }
                    `}</style>
                </>
            )
        } else {
            //Do nothing if there is already
        }

        return (
            <>
                <div className="container">
                    {undoButton}
                    <div className="feelingLucky" onClick={this.randomise}>
                        I'm Feeling Lucky
                    </div>
                </div>

                <style jsx>{`
                    .container{
                        margin: auto;
                        display: flex;
                        justify-content: center;
                        align-content: space-between;
                        cursor: pointer;
                        user-select: none; 
                    }
                    .feelingLucky{
                        border: solid 1px #848589;
                        background-color: #0e101c;
                        padding: 20px;
                        border-radius: 0px 30px 30px 0px;
                    }
                `}</style>
            </>
        )
    }
}

export default RandomButton