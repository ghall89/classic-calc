import SwiftUI

struct Button: View {
	
	@EnvironmentObject var observableOutput: ObservableOutput
	
	let label: String
	let isWide: Bool?
	let isTall: Bool?
	
	init(label: String, isWide: Bool? = false, isTall: Bool? = false) {
		self.label = label
		self.isWide = isWide
		self.isTall = isTall
	}
	
	@GestureState private var isPressed = false
	
	private func textAligment() -> Alignment {
		if isWide == true {
			return .leading
		}
		if isTall == true {
			return .bottom
		}
		return .center
	}
	
	var body: some View {
		Rectangle()
			.stroke(.black, lineWidth: 2)
			.background(Rectangle().fill(isPressed ? .black : .white))
			.frame(width: isWide! ? 56 : 24, height: isTall! ? 56 : 24)
			.clipped()
			.shadow(color: .black, radius: 0, x: 3, y: 3)
			.overlay(alignment: textAligment() , content: {
				Text(label)
					.foregroundColor(isPressed ? .white : .black)
					.padding(6)
			})
			.gesture(
				DragGesture(minimumDistance: 0)
					.onEnded { value in
						handleButton(label: label, observableOutput: observableOutput)
					}
					.updating($isPressed) { value, state, _ in
						state = value.startLocation.x < 50 && value.startLocation.y < 50
					}
			)
	}
}

struct ContentView: View {
	
	@EnvironmentObject var observableOutput: ObservableOutput
	
	var body: some View {
		VStack(alignment: .trailing) {
			ZStack {
				RoundedRectangle(cornerRadius: 8)
					.fill(.gray)
					.frame(maxWidth: .infinity, maxHeight: .infinity)
				VStack {
					Rectangle()
						.stroke(.black, lineWidth: 1)
						.background(Rectangle().fill(.white))
						.frame(width: 120, height: 30)
						.overlay(alignment: .trailing, content: {
							Text(observableOutput.outputString)
								.font(.system(size: 16))
								.foregroundColor(.black)
								.padding(6)
						})
					HStack {
						Button(label: "C")
						Button(label: "=")
						Button(label: "/")
						Button(label: "*")
					}
					HStack {
						Button(label: "7")
						Button(label: "8")
						Button(label: "9")
						Button(label: "-")
					}
					HStack {
						Button(label: "4")
						Button(label: "5")
						Button(label: "6")
						Button(label: "+")
					}
					HStack {
						VStack {
							HStack {
								Button(label: "1")
								Button(label: "2")
								Button(label: "3")
							}
							HStack {
								Button(label: "0", isWide: true)
								Button(label: ".")
							}
						}
						Button(label: "=", isTall: true)
					}
				}
				.padding(10)
			}
			.padding(2)
			.padding(.top, 6)
		}
		.frame(maxHeight: .infinity)
	}
}
