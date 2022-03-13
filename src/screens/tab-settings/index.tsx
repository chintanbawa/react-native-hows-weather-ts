import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Subheading, useTheme } from 'react-native-paper'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Creators as settingsActions } from '../../store/settings/actions'
import { useAppDispatch, useAppSelector } from '../../hooks'

const chipHeight = 36

const SettingsScreen = () => {
  const colorScheme = useAppSelector(state => state.settings.colorScheme)
  const measurementUnit = useAppSelector(
    state => state.settings.measurementUnit,
  )

  const dispatch = useAppDispatch()

  const { colors } = useTheme()

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <View>
        <Subheading style={{ color: colors.text }}>Color Scheme:</Subheading>

        <View
          style={{
            flexDirection: 'row',
            elevation: 0,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          {[
            { label: 'System', value: 'system' },
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
          ].map(({ label, value }, index) => {
            const isSelected = colorScheme === value
            return (
              <TouchableOpacity
                key={label + index}
                onPress={() =>
                  dispatch(settingsActions.setColorScheme(value.toString()))
                }>
                <View
                  style={{
                    backgroundColor: isSelected ? colors.primary : '#0000',
                    paddingHorizontal: 15,
                    height: chipHeight,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 40,
                    borderColor: isSelected ? '#0000' : colors.primary,
                    borderWidth: isSelected ? 0 : 1.5,
                  }}>
                  {isSelected && (
                    <MaterialIcons name="check" size={25} color="white" />
                  )}
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: isSelected ? 'white' : colors.primary,
                      marginLeft: 5,
                    }}>
                    {label}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
      <View style={{ marginTop: 20 }}>
        <Subheading style={{ color: colors.text }}>
          Measurement Unit:
        </Subheading>

        <View
          style={{
            flexDirection: 'row',
            elevation: 0,
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginTop: 10,
          }}>
          {['Metric', 'Imperial'].map((unit, index) => {
            const isSelected = measurementUnit === unit
            return (
              <TouchableOpacity
                key={unit + index}
                onPress={() =>
                  dispatch(settingsActions.setMeasurementUnit(unit.toString()))
                }>
                <View
                  style={{
                    backgroundColor: isSelected ? colors.primary : '#0000',
                    paddingHorizontal: 30,
                    height: chipHeight,
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 40,
                    borderColor: isSelected ? '#0000' : colors.primary,
                    borderWidth: isSelected ? 0 : 1.5,
                  }}>
                  {isSelected && (
                    <MaterialIcons name="check" size={25} color="white" />
                  )}
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: 'bold',
                      color: isSelected ? 'white' : colors.primary,
                      marginLeft: 5,
                    }}>
                    {unit}
                  </Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </View>
  )
}

export default SettingsScreen
