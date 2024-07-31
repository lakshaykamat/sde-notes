# Flexbox
The flexbox layout module, commonly known as flexbox, was developed to provide robust alignment capabilities and space distribution between items in an interface within a one-dimensional layout model.

This article presents an overview of the primary characteristics of flexbox, which we'll explore in more detail in subsequent guides.

## Element

To start using flexbox, you first need to define a flex container.

![Flex container](https://cdn.hashnode.com/res/hashnode/image/upload/v1703351826417/ee368942-de06-4030-a85a-272adbcfe235.png)

The image above displays a flex container highlighted in violet, with flex items showcased in burlywood colors. By default, the flex container displays items in a row.

```css
.container {
    display: flex; /* Creates a flex container and displays items in a row */
}
```

The flex container (violet area) offers several properties:

- `flex-direction`
- `flex-wrap`
- `flex-flow`
- `justify-content`
- `align-items`
- `align-content`

### Flex Direction

It determines the direction in which items align and can take values like `row` (default), `column`, `row-reverse`, `column-reverse`.

```css
.container {
    display: flex;
    flex-direction: column;
}
```

![Flex Direction Column](https://cdn.hashnode.com/res/hashnode/image/upload/v1703353109819/e45eec79-0123-4108-94dc-fbd7b3906a31.png)

```css
.container {
    display: flex;
    flex-direction: column-reverse;
}
```

`row-reverse` and `column-reverse` arrange the items in a row or column but in reverse order, contrary to what you set.

### Flex Wrap

This property determines whether items should wrap within the container. When set to `flex-wrap`, items adjust within the container, arranging themselves into the second row or column without overflowing.

```css
.container {
    display: flex;
    flex-wrap: nowrap; /* Default value */
}
```

![Flex Wrap No Wrap](https://cdn.hashnode.com/res/hashnode/image/upload/v1703353516246/5db2c696-e346-4bd1-8270-0982c324b69c.png)

In the above illustration, `flex-wrap` is set to its default value `nowrap`, causing the items' widths to be affected.

```css
.container {
    display: flex;
    flex-wrap: wrap;
}
```

The `flex-wrap` property wraps the items within the container, preventing overflow.

![Flex Wrap Wrap](https://cdn.hashnode.com/res/hashnode/image/upload/v1703353733894/2a6a1d61-51e5-483c-97bf-83efcf75485f.png)

```css
.container {
    display: flex;
    flex-wrap: wrap-reverse;
}
```

`wrap-reverse` wraps all elements in reverse order.

![Flex Wrap Wrap Reverse](https://cdn.hashnode.com/res/hashnode/image/upload/v1703353809649/894d7fb8-1d70-4a77-a251-cec07ff73bdf.png)
