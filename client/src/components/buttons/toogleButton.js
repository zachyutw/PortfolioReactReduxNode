class ToogleMenuBtn extends Comment {
    constructor(props) {
        super(props);
        this.state = { menu: false };
        this.displayMenu = this.displayMenu.bind(this);
    }
    displayMenu() {
        console.log(this.state.menu);
        this.setState({ menu: !this.state.menu });
    }

    render() {
        return (
            <button onClick={this.displayMenu}> btn </button>

        );
    }
}