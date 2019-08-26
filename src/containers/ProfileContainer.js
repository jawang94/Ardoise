import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import ActionCreators from "../redux/actions";
import RoundedButton from "../components/buttons/RoundedButton";
import colors from "../styles/colors";

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    padding: 50,
  },
});

const mapStateToProps = state => ({
  loggedInStatus: state.loggedInStatus,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
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
        <RoundedButton
          text="Logout"
          background={colors.green01}
          textColor={colors.white}
          handleOnPress={this.handleOnPress}
        />
      </View>
    );
  }
}

ProfileContainer.propTypes = {
  logIn: PropTypes.func.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
