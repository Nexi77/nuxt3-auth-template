export const passwordRule = (node: Ref<string>) =>
{
    return isPasswordValid(node.value);
};
