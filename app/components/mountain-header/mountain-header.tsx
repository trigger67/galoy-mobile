import * as React from "react"
import { View, Text } from "react-native"
import EStyleSheet from "react-native-extended-stylesheet"
import Montain from "./mointains-cloud-01.svg"
import { translate } from "../../i18n"
import { palette } from "../../theme/palette"

const styles = EStyleSheet.create({
  headerSection: {
    color: palette.white,
    fontSize: "16rem",
    paddingTop: "18rem",
  },

  mountainView: {
    alignItems: "center",
  },

  titleSection: {
    color: palette.white,
    fontSize: "24rem",
    fontWeight: "bold",
    paddingTop: "6rem",
  },

  topView: {
    marginTop: "80rem",
  },
})

export const MountainHeader = ({ amount, color }) => (
  <View style={{ backgroundColor: color }}>
    <View style={styles.topView}>
      <View style={{ alignItems: "center", paddingBottom: 16 }}>
        <Text style={styles.headerSection}>{translate("EarnScreen.youEarned")}</Text>
        <Text style={styles.titleSection}>{amount} sats</Text>
      </View>
    </View>
    <View style={styles.mountainView}>
      <Montain />
    </View>
  </View>
)
