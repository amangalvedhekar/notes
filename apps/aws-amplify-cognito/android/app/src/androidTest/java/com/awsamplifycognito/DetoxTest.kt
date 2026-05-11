package com.awsamplifycognito

import androidx.test.ext.junit.runners.AndroidJUnit4
import androidx.test.rule.ActivityTestRule
import com.wix.detox.Detox
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class DetoxTest {
  @get:Rule
  val activityRule = ActivityTestRule(MainActivity::class.java, false, false)

  @Test
  fun runDetoxTests() {
    Detox.runTests(activityRule)
  }
}
