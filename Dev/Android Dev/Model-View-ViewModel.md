# MVVM
Model-View-ViewModel (MVVM) is a design pattern widely used in Android development to separate concerns and improve the testability and maintainability of code. Here's a brief explanation of the components in MVVM:

1. **Model:**
   - Represents the data and business logic of the application.
   - It can include data classes, network calls, databases, and other components that handle the data and its operations.
   - The Model is responsible for interacting with the data source and processing the data.

2. **View:**
   - Represents the UI of the application.
   - It observes changes in the ViewModel and updates the UI accordingly.
   - The View is responsible for displaying data and capturing user input.

3. **ViewModel:**
   - Acts as a bridge between the Model and the View.
   - Holds the UI-related data and business logic.
   - Exposes data to the View using observable LiveData or StateFlow.
   - Survives configuration changes, like screen rotations, by using the Android ViewModel.
   - It doesn't contain direct references to the UI components to avoid memory leaks.
![](https://miro.medium.com/v2/resize:fit:813/1*j9-O4DcaYTBTlSjckaFqXA.png)

Here's a basic example of MVVM in Android using Kotlin and the Android Architecture Components (ViewModel and LiveData):

**ViewModel:**
```kotlin
import androidx.lifecycle.LiveData
import androidx.lifecycle.MutableLiveData
import androidx.lifecycle.ViewModel

class MyViewModel : ViewModel() {
    private val _counter = MutableLiveData<Int>()
    val counter: LiveData<Int> get() = _counter

    init {
        // Initialize the counter value
        _counter.value = 0
    }

    fun incrementCounter() {
        _counter.value = (_counter.value ?: 0) + 1
    }
}
```

**View:**
```kotlin
import android.os.Bundle
import androidx.activity.viewModels
import androidx.appcompat.app.AppCompatActivity
import androidx.lifecycle.Observer
import com.example.mvvmexample.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding
    private val viewModel: MyViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Observe changes in the counter and update the UI
        viewModel.counter.observe(this, Observer {
            binding.counterTextView.text = "Counter: $it"
        })

        // Set up a click listener for the button to increment the counter
        binding.incrementButton.setOnClickListener {
            viewModel.incrementCounter()
        }
    }
}
```

**Layout (activity_main.xml):**
```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:gravity="center"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/counterTextView"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Counter: 0"
        android:textSize="18sp"
        android:padding="16dp"/>

    <Button
        android:id="@+id/incrementButton"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Increment Counter"
        android:layout_marginTop="16dp"/>

</LinearLayout>
```

This example demonstrates a simple MVVM structure in Android using the ViewModel and LiveData components. The `MyViewModel` class holds the data and logic, and the `MainActivity` observes changes in the ViewModel and updates the UI accordingly. The layout file (`activity_main.xml`) defines the UI components.