import Foundation

class ObservableOutput: ObservableObject {
	@Published var outputInt: Int = 0
	@Published var outputString: String = "0"
}

func handleButton(label: String, observableOutput: ObservableOutput) {
	if let int = Int(label) {
		if observableOutput.outputString == "0" {
			observableOutput.outputString = label
		} else {
			observableOutput.outputString += label
		}
	}
	
	if (label == "." && !observableOutput.outputString.contains(".")) {
		observableOutput.outputString += "."
	}
	
	if (label == "C") {
		observableOutput.outputString = "0"
	}
	
	}
