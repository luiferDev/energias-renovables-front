/* eslint-disable react/prop-types */
import { Avatar, Box, Card, Flex, Text } from "@radix-ui/themes"

export default function CardItem({ ...props }) {
    return (
        <Box width="320px">
            <Card size="3">
                <Flex gap="4" align="center">
                    <Avatar size="5" radius="full" fallback="T" color="indigo" />
                    <Box>
                        <Text as="div" size="5" weight="bold">
                            {props.energy}
                        </Text>
                        <Text as="div" size="4" color="gray">
                            {props.number}
                        </Text>
                    </Box>
                </Flex>
            </Card>
        </Box>
    )
}
