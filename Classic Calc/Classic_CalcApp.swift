import SwiftUI

@main
struct Classic_CalcApp: App {
	
	@StateObject var observableOutput = ObservableOutput()
	
	var body: some Scene {
		WindowGroup {
			ContentView()
				.frame(width: 150, height: 230)
				.background(Color.black)
				.environmentObject(observableOutput)
		}
		.windowStyle(HiddenTitleBarWindowStyle())
		.windowResizability(.contentSize)
	}
}
