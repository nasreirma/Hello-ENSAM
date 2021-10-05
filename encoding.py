import face_recognition
import cv2
from imutils import paths
import os
from numpy import save


def encode():
    imagePaths = list(paths.list_images('Images'))
    known_face_encodings = []
    known_face_names = []

    for (i, imagePath) in enumerate(imagePaths):
        name = imagePath.split(os.path.sep)[-2]
        image = cv2.imread(imagePath)
        rgb = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        boxes = face_recognition.face_locations(rgb,model='hog')
        encodings = face_recognition.face_encodings(rgb, boxes)
        for encoding in encodings:
            known_face_encodings.append(encoding)
            known_face_names.append(name)

    save('encodings.npy', known_face_encodings)
    save('names.npy', known_face_names)

