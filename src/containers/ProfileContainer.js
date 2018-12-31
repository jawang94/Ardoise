import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../redux/actions";
import NextArrowButton from "../components/buttons/NextArrowButton";

class ProfileContainer extends Component {
  constructor(props) {
    super(props);

    this.handleNextButton = this.handleNextButton.bind(this);
  }

  handleNextButton() {
    const { logOut, navigation } = this.props;
    const { navigate } = navigation;
    if (logOut()) {
      navigate("LoggedOut");
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>Profile Container</Text>
        <NextArrowButton handleNextButton={this.handleNextButton} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 50
  }
});

const mapStateToProps = state => ({
  loggedInStatus: state.loggedInStatus
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(ActionCreators, dispatch);

ProfileContainer.propTypes = {
  logIn: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func
  }).isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
