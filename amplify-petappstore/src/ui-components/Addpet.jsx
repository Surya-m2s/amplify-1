/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Pet } from "../models";
import {
  getOverrideProps,
  useDataStoreCreateAction,
  useDataStoreUpdateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import { schema } from "../models/schema";
import {
  Button,
  Divider,
  Flex,
  Icon,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Addpet(props) {
  const { pet, overrides, ...rest } = props;
  const [
    textFieldTwoNineSevenSixSixNineTwoTwoValue,
    setTextFieldTwoNineSevenSixSixNineTwoTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenTwoTwoSevenZeroTwoValue,
    setTextFieldThreeSixSevenTwoTwoSevenZeroTwoValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenTwoTwoSevenZeroNineValue,
    setTextFieldThreeSixSevenTwoTwoSevenZeroNineValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenTwoTwoSevenOneSixValue,
    setTextFieldThreeSixSevenTwoTwoSevenOneSixValue,
  ] = useStateMutationAction("");
  const [
    textFieldTwoNineSevenSixSixNineTwoThreeValue,
    setTextFieldTwoNineSevenSixSixNineTwoThreeValue,
  ] = useStateMutationAction("");
  const [
    textFieldThreeSixSevenTwoTwoSevenTwoEightValue,
    setTextFieldThreeSixSevenTwoTwoSevenTwoEightValue,
  ] = useStateMutationAction("");
  const buttonTwoNineSevenSixSixNineTwoSixOnClick = useDataStoreCreateAction({
    model: Pet,
    fields: {
      name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
      age: textFieldThreeSixSevenTwoTwoSevenZeroTwoValue,
      breed: textFieldThreeSixSevenTwoTwoSevenZeroNineValue,
      about: textFieldThreeSixSevenTwoTwoSevenOneSixValue,
      image: textFieldTwoNineSevenSixSixNineTwoThreeValue,
      color: textFieldThreeSixSevenTwoTwoSevenTwoEightValue,
    },
    schema: schema,
  });
  const buttonThreeSixSevenTwoTwoSevenTwoThreeOnClick =
    useDataStoreUpdateAction({
      model: Pet,
      id: pet?.id,
      fields: {
        name: textFieldTwoNineSevenSixSixNineTwoTwoValue,
        age: textFieldThreeSixSevenTwoTwoSevenZeroTwoValue,
        breed: textFieldThreeSixSevenTwoTwoSevenZeroNineValue,
        about: textFieldThreeSixSevenTwoTwoSevenOneSixValue,
        image: textFieldTwoNineSevenSixSixNineTwoThreeValue,
        color: textFieldThreeSixSevenTwoTwoSevenTwoEightValue,
      },
      schema: schema,
    });
  return (
    <Flex
      gap="16px"
      direction="column"
      width="640px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      borderRadius="12px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(194,208,212,1)"
      {...getOverrideProps(overrides, "Addpet")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="24px 24px 24px 24px"
        {...getOverrideProps(overrides, "Content")}
      >
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="space-between"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Edit Profile29766913")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Edit Profile"
            {...getOverrideProps(overrides, "Edit Profile29766916")}
          ></Text>
          <View
            width="24px"
            height="24px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            overflow="hidden"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Icon")}
          >
            <Icon
              width="14px"
              height="14px"
              viewBox={{ minX: 0, minY: 0, width: 14, height: 14 }}
              paths={[
                {
                  d: "M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z",
                  fill: "rgba(13,26,38,1)",
                  fillRule: "nonzero",
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="20.83%"
              bottom="20.83%"
              left="20.83%"
              right="20.83%"
              {...getOverrideProps(overrides, "Vector")}
            ></Icon>
          </View>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766917")}
        ></Divider>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Forms")}
        >
          <TextField
            width="unset"
            height="unset"
            label="Name"
            placeholder="Kitty"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoTwoValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoTwoValue(event.target.value);
            }}
            {...getOverrideProps(overrides, "TextField29766922")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Age"
            placeholder="1"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenTwoTwoSevenZeroTwoValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenTwoTwoSevenZeroTwoValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36722702")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Breed"
            placeholder="Husky"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenTwoTwoSevenZeroNineValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenTwoTwoSevenZeroNineValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36722709")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="About"
            placeholder="Funny"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenTwoTwoSevenOneSixValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenTwoTwoSevenOneSixValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36722716")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Image"
            placeholder="Pet Image.jpg"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldTwoNineSevenSixSixNineTwoThreeValue}
            onChange={(event) => {
              setTextFieldTwoNineSevenSixSixNineTwoThreeValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField29766923")}
          ></TextField>
          <TextField
            width="unset"
            height="unset"
            label="Color"
            placeholder="White & Black"
            shrink="0"
            alignSelf="stretch"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            value={textFieldThreeSixSevenTwoTwoSevenTwoEightValue}
            onChange={(event) => {
              setTextFieldThreeSixSevenTwoTwoSevenTwoEightValue(
                event.target.value
              );
            }}
            {...getOverrideProps(overrides, "TextField36722728")}
          ></TextField>
        </Flex>
        <Divider
          width="unset"
          height="1px"
          shrink="0"
          alignSelf="stretch"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider29766925")}
        ></Divider>
        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 420")}
        >
          <Button
            width="unset"
            height="unset"
            borderRadius="6px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Save"
            onClick={() => {
              buttonTwoNineSevenSixSixNineTwoSixOnClick();
            }}
            {...getOverrideProps(overrides, "Button29766926")}
          ></Button>
          <Button
            width="unset"
            height="unset"
            borderRadius="6px"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="primary"
            children="Update"
            onClick={() => {
              buttonThreeSixSevenTwoTwoSevenTwoThreeOnClick();
            }}
            {...getOverrideProps(overrides, "Button36722723")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
