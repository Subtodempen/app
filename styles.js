import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#EEE",
    height: 100,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10
  },
  activeTabButton: {
    backgroundColor: "#DDD"
  },
  activeTabButtonText: {
    fontWeight: "bold"
  },
  tabButton: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  tabButtonText: {
    fontSize: 18
  },
  pageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#ddd"
  },
  buttonText: {
    color: "#000",
    fontSize: 24,
    fontWeight: "bold"
  },
  text: {
    fontSize: 24
  },
  settingsButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#F44336",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5
  },
  settingsButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  },
  settingsContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    bottom: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  settingsCloseButton: {
    position: "absolute",
    top: 20,
    right: 10,
    backgroundColor: "#F44336",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 15
  },
  settingsCloseButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold"
  },
  settingsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  settingsInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  settingsInputLabel: {
    fontSize: 18,
    marginRight: 10
  },
  settingsInput: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#999",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    minWidth: 200
  }
});

export default styles;
