## Composable functions

Composable functions are the basic building block of a UI in Compose. A composable function:

- Describes some part of your UI.
- Doesn't return anything.
- Takes some input and generates what's shown on the screen.
## Annotations

- Annotations, signaled by `@` preceding their name, provide extra insights and directives in code elements like properties, functions, and classes. 
- In Jetpack Compose, annotations aid the compiler and tools, facilitating UI code interpretation, optimization, and readability. 
- They convey intent, mark deprecated features, define scopes, suppress warnings, and support experimental functionality, enabling streamlined development and enhancing the understanding of code by developers and tools.
![](https://developer.android.com/static/codelabs/basic-android-kotlin-compose-text-composables/img/a3da8d7133397e49_960.png)

#### Annotations in Jetpack Compose
- Annotations offer metadata and instructions in code elements, aiding comprehension and tool processing.
- Notable annotations like `@Composable` mark UI elements transforming data into UI visuals.

#### Annotated Function Structure
- Annotated functions, e.g., `@Composable`, detail UI aspects without return.
- Input-driven, these functions generate visible screen elements based on provided data.

#### Annotated Properties
- Marked properties like `@Json` and `@Volatile` provide additional context for tools and understanding.

#### Annotations with Parameters
- Parameters in annotations, such as `@Preview`, offer nuanced previews and title customization.
- Configurable parameters in annotations support varied preview styles for developers.

## Naming Conventions for Composable Functions
- PascalCase naming convention for `@Composable` functions aids readability and clarity.
- Naming guidelines enforce nouns over verbs or descriptors to denote UI elements.

#### Examples of Annotation Usage and Naming Conventions
- Good practice: `@Composable fun FancyButton(text: String) {}`
- Naming conventions emphasize descriptive nouns in PascalCase for clear and structured UI elements.
- Avoidance: `@Composable fun fancyButton(text: String) {}`.